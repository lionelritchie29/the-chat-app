import axios from "axios";
import { generateAPIUrl } from "../constants/api";

export class UserService {
  static getUsers = async () => {
    const response = await axios.get(generateAPIUrl("/users"));
    return response.data.data;
  };
}
