

export const getServerSideProps = async ({ res }) => {
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