import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Progress } from "@/components/ui/progress";

import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";


export default function Home() {
  return (

      <div className="flex flex-col gap-y-4  p-5 ">
        <div className="text-rose-600">
          Hello World\



        </div>
        <div>
                  <Button variant="elevated">
            have Sex
          </Button>
          </div>

        <Input placeholder="I am the inout ">
        </Input>
        <div>

          <Progress value = {50}></Progress>

        </div>

        <div>
          <Textarea   value ="I am text area"></Textarea>
        </div>


        <div>
          <Checkbox  value ="I am text area"></Checkbox>
        </div>


      </div>
      );
}
