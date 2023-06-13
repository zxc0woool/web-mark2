
import { useEffect } from "react";
import { getFileAddress, getQrCode, mergeRequest } from "../api";
import styles from "./index.module.scss";


export default function Home() {

  useEffect(() => {

     mergeRequest([getQrCode().shutManage(),getFileAddress({})]).then((res: any) => {
      console.log(res);
    });


  }, []);

  return <div className={styles.Home}>
    Home
  </div>;

}

