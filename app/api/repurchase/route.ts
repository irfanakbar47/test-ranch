import { NextRequest, NextResponse } from 'next/server';
import { fetchProductRepurchaseData } from '@/services/api';  

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const barcode = searchParams?.get('barcode');

  if (!barcode) 
    return NextResponse.json({ error: 'Barcode is required' }, { status: 400 });

  const data = await fetchProductRepurchaseData(barcode);
  return NextResponse.json(data);
}
