
import { EventEmitter } from 'events'

const TokenKey = "Authorization$://"; //授权码

/**
* 发送
* 
* 通过Bus.emit('方法名',参数) 来触发这个事件并传递参数
*
* 接收
*
* 通过Bus.on('方法名',data=>{}) 来接收事件并得到传递的参数
*
* 在两个组件中都需要导入Bus
*
* 移除订阅
* Bus.removeAllListeners("事件名")  移除所有订阅
*/
export const Bus = new EventEmitter()

let audio = new Audio();

/*
 * 播放MP3
 * */
export function audioPlay(mp3: string) {
  let audioPlay = new Audio();
  audioPlay.src = mp3;
  audioPlay.play();
}

/*
 * 循环播放MP3
 * */
export function audioLoop(mp3: string) {
  audio.pause();
  audio = new Audio();
  audio.src = mp3;
  audio.loop = true;
  audio.play();
}

/*
 * 关闭MP3
 * */
export function audioStop() {
  audio.pause();
}


/*
 * 获取getItem
 * */
export function getLocal(Key?: string | undefined) {
  let local = localStorage.getItem(Key ? Key : TokenKey) as any;
  return local ? JSON.parse(local) : null;
}

/*
 * 设置setItem
 * */
export function setLocal(params: any, Key?: string) {
  return localStorage.setItem(Key ? Key : TokenKey, JSON.stringify(params));
}

/*
 * 移除removeItem
 * */
export function removeLocal(Key?: string) {
  return localStorage.removeItem(Key ? Key : TokenKey);
}

/*
 * getBaseFile64
 * */
export async function getBaseFile64(file: Blob) {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export async function getBase64(file: Blob, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', async () => await callback(reader.result));
  reader.readAsDataURL(file);
}

/*
 *通过id 显示id所在位置
 * */
export function naver(id: string) {
  var obj = document.getElementById(id);
  var oPos = obj?.offsetTop;
  document.documentElement.scrollTop = oPos || 0;
}


/** 请求返回的状态 */
export enum requestStatus {
  /**请求成功 */
  OK,
  /**请求失败 */
  ERROR
}

