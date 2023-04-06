import { NextApiResponse } from "next";


export const getServerSideProps = async ({ res }: { res: NextApiResponse}) => {
    res.setHeader("Location", `/devices`);

    res.statusCode = 302;
    res.end();

    return { props: {} };
};

const Home = () => {

  return (
    <>
      Home
    </>
  )
}

export default Home