import { PageWrap } from '@components/pageWrap/pageWrap'
import { AreaTitle } from '@components/areaTitle/areaTitle'
import Link from 'next/link'
// import dbConnect from '../../../../lib/db';
// import { modelEn,
//   modelJp,
//   modelServer
// } from '../../../../models/learningItem';
// import { timeFormatter } from '../../../../lib/util'
// import { ItemEditor } from '@/app/components/itemEditor/itemEditor'
import './style.scss'

export default async function Post({ params }) {
  // 确保 params.slug 存在

  // const slug = params?.slug || [];
  const paramsArr = await params
  const slug = paramsArr.slug
  // console.log('slug', slug)
  const urlDomain = `${process.env.URL_DOMAIN}/api/learning-item` // wtest 

  // await dbConnect();
  // let data
  // if (slug[0] === 'english') {
  //   data = await modelEn.findOne({ _id: slug[1] }).lean();
  // } else if (slug[0] === 'japanese') {
  //   data = await modelJp.findOne({ _id: slug[1] }).lean();
  // } else if (slug[0] === 'server') {
  //   data = await modelServer.findOne({ _id: slug[1] }).lean();
  // }
  // // const dataJson = data.json()
  //   // const urlDomain = `${process.env.URL_DOMAIN}/api/learning-item?collectionName=${slug[0]}`
  //   console.log('data ~~~~~~~~~~~~~~~~~~', data)

  return (
    <PageWrap>
      page slug
      {/* {data && <>
        <AreaTitle>
        <h2>{data.title}</h2>
      </AreaTitle>
      <div className="area-info">
          <div><Link href={slug[0] ? `/learning/${slug[0]}` : '/learning'}>Back to List</Link></div>
          <p>Created Time: {timeFormatter(data.createdAt)} </p>
          <p>Updated Time: {timeFormatter(data.updatedAt)} </p>
      </div>
      <div className="page-details">
        <ItemEditor
            params={
            {
                urlDomain,
                data: {
                    title: data.title,
                    // content: data.content, // wtest
                    content: data.content, // wtest htmlSimpleDecode(data.content),
                    id: slug[1],
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt
                },
                collectionName: slug[0]
            }
            }
        ></ItemEditor>
      </div>
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold">Post Page</h1>
        <p className="mt-4 text-gray-600">Slug Parameters:</p>
        <pre className="bg-gray-100 p-4 rounded-md mt-2">{JSON.stringify(slug, null, 2)}</pre>
      </div>
      </>} */}
      
    </PageWrap>
  );
}

export async function generateStaticParams() {
  return [
    { slug: ["learning", "japanese", "123"] },
    { slug: ["learning", "english", "456"] },
  ];
}