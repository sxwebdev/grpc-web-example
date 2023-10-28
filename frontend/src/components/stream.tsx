import { helloService } from "@/api/grpc";
import { Timestamp } from "@/api/proto/google/protobuf/timestamp";
import { StreamRequest, StreamResponse } from "@/api/proto/example";
import { Badge } from "@tkcrm/ui";
import { useEffect, useState } from "react";

const sayReq: StreamRequest = {};

const Stream: React.FC = () => {
  const [res, setResp] = useState<StreamResponse | undefined>();

  const handleSream = async () => {
    const call = helloService.stream(sayReq);
    for await (const message of call.responses) {
      console.log("got a message", message);
      setResp(message);
    }
  };

  useEffect(() => {
    handleSream();
  }, []);

  return (
    <div className="mb-5">
      <div className="mb-5 text-xl font-semibold">
        Stream response from server
      </div>
      <Badge type="primary" className="text-base">
        {res?.randInteger}
      </Badge>

      {res?.date && (
        <Badge type="warning" className="ml-2">
          {Timestamp.toDate(res.date).toISOString()}
        </Badge>
      )}
    </div>
  );
};

export default Stream;
