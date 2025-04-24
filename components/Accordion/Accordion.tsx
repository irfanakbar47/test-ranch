'use client';

import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TAccordionDataProps, TAccordionItemProps, TAccordionProps } from './TAccordionProps';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

const searchAccordion = (accordion: TAccordionDataProps, searchTerm: string): TAccordionDataProps | null => {
  const { title, content } = accordion;

  const matches = title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (typeof content === 'string' && content.toLowerCase().includes(searchTerm.toLowerCase()));

  if (Array.isArray(content)) {
    const filteredContent = content
      .map((nestedAccordion: TAccordionDataProps) => searchAccordion(nestedAccordion, searchTerm))
      .filter((nestedAccordion: TAccordionDataProps | null): nestedAccordion is TAccordionDataProps => nestedAccordion !== null);
    
    if (filteredContent.length > 0) {
      return { ...accordion, content: filteredContent };
    }
  }

  return matches ? accordion : null;
};

const AccordionItem = (props: TAccordionItemProps) => {
  const { item, index, openItems, toggleItem, height, contentRefs } = props;
  const { id, title, content, isChildAccordion } = item || {};

  const isOpen = openItems.includes(index);
  const arrowIcon = isOpen 
    ? (isChildAccordion 
        ? <SlArrowUp size={24} fill="black" /> 
        : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.4853 12H3.51472" stroke="black" strokeLinecap="round" strokeLinejoin="round" /></svg>)
    : (isChildAccordion 
        ? <SlArrowDown size={24} fill="black" /> 
        : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.4853 12H3.51472" stroke="black" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 3.51471V20.4853" stroke="black" strokeLinecap="round" strokeLinejoin="round" /></svg>);

  return (
    <div id={id} data-accordion="open" className={`${isChildAccordion ? 'mb-5 px-5 rounded-[20px] bg-blue-primary2' : ''}`}>
      <h2 id={`accordion-open-heading-${index}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full text-base md:text-lg p-5 rtl:text-right rounded-t-xl gap-3 ${isOpen ? 'text-green-primary1 font-bold' : 'text-blue-primary1 font-medium'}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-open-body-${index}`}
          onClick={() => toggleItem(index)}
        >
          <span className='text-left'>{title}</span>
          <span className="w-[24px] h-[24px]">{arrowIcon}</span>
        </button>
      </h2>
      <div 
        id={`accordion-open-body-${index}`}
        className={`mx-5 border border-x-0 border-t-0 border-b-1 border-gray-200 text-base overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        aria-labelledby={`accordion-open-heading-${index}`}
        ref={(el) => { contentRefs.current[index] = el; }}
        style={{ maxHeight: height[index] || '0px' }}
      >
        <div className={`mb-5 p-5 rounded-[20px] ${typeof content === 'string' && !isChildAccordion ? 'bg-blue-primary2' : ''}`}>
          {Array.isArray(content) ? (
            content.map((nestedItem, nestedIndex) => (
              <MemoizedAccordionItem
                key={nestedIndex}
                item={nestedItem}
                index={`${index}-${nestedIndex}`}
                openItems={openItems}
                toggleItem={toggleItem}
                height={height}
                contentRefs={contentRefs}
              />
            ))
          ) : (
            <div dangerouslySetInnerHTML={{ __html: content || '' }} className="text-blue-primary1 font-medium"></div>
          )}
        </div>
      </div>
    </div>
  );
};

const MemoizedAccordionItem = memo(AccordionItem);

const Accordion = (props: TAccordionProps) => {
  const { activeBtn, searchTerm, accordionData } = props;

  const [openItems, setOpenItems] = useState<number[]>([]);
  const [height, setHeight] = useState<{ [key: number]: string }>({});
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const toggleItem = useCallback((itemNumber: number) => {
    setOpenItems(prevOpenItems => {
      const isOpen = prevOpenItems.includes(itemNumber);
      const newOpenItems = isOpen ? prevOpenItems.filter(item => item !== itemNumber) : [...prevOpenItems, itemNumber];
  
      if (!isOpen && contentRefs.current[itemNumber]) {
        setHeight(prevHeight => ({ ...prevHeight, [itemNumber]: `${contentRefs.current[itemNumber]?.scrollHeight}px` }));
      } else {
        setHeight(prevHeight => ({ ...prevHeight, [itemNumber]: '0px' }));
      }
  
      return newOpenItems;
    });
  }, []);

  const filteredAccordionData = useMemo(() => {
    return accordionData
      .filter(accordion => accordion.groupId === activeBtn)
      .map(accordion => searchAccordion(accordion, searchTerm))
      .filter(Boolean);
  }, [accordionData, activeBtn, searchTerm]);

  // Open the parent accordion when the search term is found in child accordion
  useEffect(() => {
    if (searchTerm !== '') {
      const parentIndices = filteredAccordionData
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => item?.isParentAccordion)
        .map(({ index }) => index);
      setOpenItems(parentIndices);
    }
  }, [searchTerm, filteredAccordionData ]);

  // Set the height of the content when the item is open
  useEffect(() => {
    setHeight((prevHeight) => {
      const newHeight = { ...prevHeight };
  
      openItems.forEach(itemNumber => {
        let currentHeight = contentRefs.current[itemNumber]?.scrollHeight || 0;
        
        Object.keys(contentRefs.current).forEach(key => {
          if (key.includes('-')) {
            const [parentIndex] = key.split('-');
            if (parseInt(parentIndex) === itemNumber) {
              currentHeight += contentRefs.current[key as unknown as number]?.scrollHeight || 0;
            }
          }
        });
  
        if (contentRefs.current[itemNumber]) {
          newHeight[itemNumber] = `${currentHeight}px`;
        }
      });
  
      return newHeight;
    });
  }, [openItems]);

  // Close all items when the search term is empty
  useEffect(() => {
    if (searchTerm === '') {
      setOpenItems([]);
      setHeight(prevHeight => {
        const newHeight = { ...prevHeight };
        Object.keys(newHeight).forEach(key => {
          newHeight[parseInt(key)] = '0px';
        });
        return newHeight;
      });
    }
  }, [searchTerm]);

   // Close all items when activeBtn changes
  useEffect(() => {
    setOpenItems([]);
    setHeight(prevHeight => {
      const newHeight = { ...prevHeight };
      Object.keys(newHeight).forEach(key => {
        newHeight[parseInt(key)] = '0px';
      });
      return newHeight;
    });
  }, [activeBtn]);
  
  // Clean up contentRefs when the component unmounts
  useEffect(() => {
    return () => {
      contentRefs.current = {};
    };
  }, []);

  return (
    <div className="border border-gray-5 rounded-xl">
      {filteredAccordionData.length > 0 ? (
        filteredAccordionData.map((accordion, index) => (
          <MemoizedAccordionItem
            key={index}
            item={accordion}
            index={index}
            openItems={openItems}
            toggleItem={toggleItem}
            height={height}
            contentRefs={contentRefs}
          />
        ))
      ) : (
        <div className="p-5 text-center text-blue-primary1 font-medium">
          No results found
        </div>
      )}
    </div>
  );
};

export default Accordion;
