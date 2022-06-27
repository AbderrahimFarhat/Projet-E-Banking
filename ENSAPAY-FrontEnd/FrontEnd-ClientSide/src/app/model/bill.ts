import { Client } from "./client";
import { Creditor } from "./creditor";
import { Unpaid } from "./unpaid";

export class Bill {
    id:number=0;
    client?:Client;
    createdAt?:Date;
    creditor?:Creditor;
    totalAmount?:string;
    unpaidList?:Unpaid[];
}
