import { PageInfo } from '../typings';

export const fetchPageInfo = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    
    // console.log('💻️ =>',  JSON.stringify(r));
    const data = await res.json();
    
    const pageInfo: PageInfo = data.pageInfo;

    console.log('💻️ =>',pageInfo);
    
    return pageInfo;
}