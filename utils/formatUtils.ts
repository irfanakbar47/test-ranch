export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatPhoneNumber = (phoneNumber: string) => {
	const cleaned = phoneNumber.replace(/\D/g, ''); 
	const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

	if (match) {
		return `(${match[1]}) ${match[2]}-${match[3]}`;
	} else if (cleaned.length <= 6) {
		return cleaned.replace(/(\d{3})(\d+)/, '($1) $2');
	} else {
		return cleaned.replace(/(\d{3})(\d{3})(\d+)/, '($1) $2-$3');
	}
};

export const formatPrice = (price: number) => {
  return `$ ${price.toFixed(2)}`;
};
