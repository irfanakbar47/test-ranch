'use client';

import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { Button, CustomImage } from '@/components';
import { articles as articlesData } from '@/data';
import { FaChevronRight } from 'react-icons/fa';
import { TArticleProps } from './TArticleProps';

type Params = Promise<{ articles: string }>;

export default function Article({ params }: { params: Params }) {
  // Use the `use` hook to resolve the Promise
  const resolvedParams = use(params);
  const { articles: articleId } = resolvedParams;

  const [article, setArticle] = useState<TArticleProps | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchArticle = async () => {
      const foundArticle = articlesData.find((article) => article.id === articleId);
      if (!foundArticle) {
        router.push('/');
        return;
      }
      setArticle(foundArticle);
    };

    fetchArticle();
  }, [articleId, router]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <main className="maxResources flex flex-col mt-[10em] gap-y-10">
      <h1 className="text-3.7xl text-blue-primary1 font-bold px-3 lg:px-0">News & Articles</h1>
      <div className="maxArticle w-full flex flex-col gap-y-5 max-h-[210px] sm:max-h-[320px] md:max-h-[430px] lg:max-h-[540px]">
        <CustomImage
          src={article.imgUrl}
          alt={article.imgAlt}
          width={1040}
          height={542}
          className="w-screen m-auto object-cover rounded-[20px] max-h-[210px] sm:max-h-[320px] md:max-h-[430px] lg:max-h-[540px]"
          priority
        />
      </div>
      <div className="flex flex-col px-3">
        <p className="text-sm leading-[28px] text-blue-primary1 mb-1">{article.date}</p>
        <h2 className="text-[20px] font-semibold text-blue-primary1 mb-10">{article.title}</h2>
        <div
          className="text-base leading-[28px] text-blue-primary1"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>
      </div>

      <Button
        type="button"
        label="See all articles"
        icon={<FaChevronRight />}
        iconPos="right"
        customStyle={`mx-auto`}
        onClick={() => router.push('/articles')}
      />
    </main>
  );
}
