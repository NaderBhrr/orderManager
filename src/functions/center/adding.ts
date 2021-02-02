import FastestValidator from "https://cdn.pika.dev/fastest-validator@^1.8.0";
import { Bson } from "../../../db.ts";
import { Center, centerCollection, centerSelectable, RCenter } from "../../schemas/center.ts";
import { throwError } from "../../utils/index.ts";

const v = new FastestValidator();
const check = v.compile({
  details: {
    type: "object",
    props: {
      set: {
        type: "object",
        props: {
          name: { type: "string" },
          owner: { type: "object", props: {}},
          address: { type: "string" },
          phone: {type: "number"},
          servingStyle: {}
        }
      },
      get: {
        type: "object",
        optional: true,
        props: centerSelectable(1)
      }
    }
  }
});

type detailsSet = { name: string; enName: string };

interface addingCenterDetails {
  set: detailsSet;
  get: RCenter;
}

type AddingCenter = (details: addingCenterDetails) => any;

export const addingCenter: AddingCenter = async details => {
  console.log("Request Details", details)
  const detailsIsRight = check({ details });
  const createCenter = (details: detailsSet) => {
    console.log("callback in details: ", details)
  }

  return detailsIsRight ? createCenter(details.set) : throwError(detailsIsRight[0].message)

};

