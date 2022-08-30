import { useQuery } from '@tanstack/react-query';
import Loading from "../components/Loading/Loading";

const useSingleUser = (email) => {
  const { singleUserLoading, data: singleUser, refetch: singleUserRefetch } = useQuery(['singleUser'], () =>
    fetch(`http://localhost:5000/user/single-user/${email}`,{
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
  )
  if (singleUserLoading) {
    return <Loading />
  }

  return [singleUser, singleUserRefetch];
}

export default useSingleUser;