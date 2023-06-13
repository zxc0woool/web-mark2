
import { Button, DatePicker } from "antd";
import { useEffect } from "react";
import styles from "./index.module.scss";
import RouterMap from "../router/subRouter";
import FrontendAuth from "../router/FrontendAuth";

export default function Index() {

  // 初始化页面
  useEffect(() => {
   
  }, []);

  const onChange = (date: any, dateString: any) => {
    console.log(date, dateString);
  };
  return (
    <div className={styles.Index}>
      <div className={styles.val}>
        Index
      </div>
      <div className={styles.val2}>
        Index2
      </div>
      <Button >Delete</Button>
      <DatePicker onChange={onChange} />
      <FrontendAuth routerConfig={RouterMap} />
    </div>
  );
}


