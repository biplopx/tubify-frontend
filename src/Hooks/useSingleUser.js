import { useQuery } from '@tanstack/react-query';
import Loading from "../components/Loading/Loading";

const useSingleUser = (email) => {
  const { singleUserLoading, data: singleUser, refetch: singleUserRefetch } = useQuery(['singleUser'], () =>
    fetch(`https://tubifybd.herokuapp.com/user/single-user/${email}`)
      .then(res => res.json())
  )

  if (singleUserLoading) {
    return <Loading />
  }

  return [singleUser, singleUserRefetch];
}

export default useSingleUser;