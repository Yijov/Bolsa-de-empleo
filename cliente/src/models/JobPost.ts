import categories from "../config/constants/Categories";
import type from "../config/constants/JobContractType";

export default class JobPost {
  static type = type;
  static categories = categories;
  constructor(
    private type: type,
    private position: string,
    private company: string,
    private location: string,
    private category: categories,
    private description: string,
    private email?: string,
    private URL?: string,
    private logo?: string,
    private howToApply?: string,
    private _id?: string,
    ownerId?: string
  ) {}
}
