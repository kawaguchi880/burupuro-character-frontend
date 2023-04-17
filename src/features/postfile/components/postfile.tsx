import React, { ChangeEvent } from 'react';
import axios from 'axios';
import FormData from 'form-data';

// 画像ファイルを送信する関数
async function sendImageFile(imageFile: File) {
  // form-dataを作成
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    // axiosを使用してPOSTリクエストを送信
    const response = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    // レスポンスを処理
    console.log('画像のアップロードに成功しました。', response.data);
  } catch (error) {
    // エラーを処理
    console.error('画像のアップロードに失敗しました。', error);
  }
}

// 画像ファイルを選択して送信するコンポーネント
export default function PostFile() {
  // ファイルの変更を監視するハンドラ
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files && event.target.files[0];
    if (imageFile) {
      sendImageFile(imageFile);
    }
  };

  return (
    <div>
      <h1>画像ファイルのアップロード</h1>
      <input type='file' id='imageInput' onChange={handleFileChange} />
    </div>
  );
}
