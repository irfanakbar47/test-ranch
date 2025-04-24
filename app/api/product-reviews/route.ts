import { NextRequest, NextResponse } from 'next/server';
import { fetchProductReviewData } from "@/services/api";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const barcode = searchParams?.get('barcode');
  const page = parseInt(searchParams?.get('page') || '1');
  const filter = searchParams?.get('filter') || 'most-recent';

  if (!barcode) {
    return NextResponse.json({ error: 'Barcode is required' }, { status: 400 });
  }

  const ratings = filter === 'most-recent' ? [1, 2, 3, 4, 5] : [parseInt(filter)];
  const params = {
    start: 0,
    limit: page * 10,
    sort_column: 'created_date',
    sort_direction: 'desc',
    filter: [{ key: 'rating', value: ratings }],
  };

  const data = await fetchProductReviewData(barcode, params);
  return NextResponse.json(data);
}
