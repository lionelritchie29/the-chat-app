import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "../../constants/queries";
import { UserService } from "../../services/user-service";

const useFetchParticipants = () => {
  return useQuery({
    queryKey: [QueryKey.FETCH_PARTICIPANTS],
    queryFn: () => UserService.getUsers(),
  });
};

export default useFetchParticipants;
