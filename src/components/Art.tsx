import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Art.module.scss";
type Prop = {
  id: string;
};
const Art = ({ id }: Prop) => {
  const [comments, setComments] = useState([
    { text: "コメント1", x: 80, y: 90 },
    { text: "コメント2", x: 50, y: 10 },
    // 他のコメントを追加
  ]);

  const imageSrc = id; // 画像のパス

  return (
    <>
      <div className={styles.size} style={{ position: "relative" }}>
        <Image className={styles.image} src={imageSrc} alt="アートです" fill />
        {comments.map((comment, index) => (
          <>
            <div
              className={styles.art_comment}
              key={index}
              style={{
                position: "absolute",
                left: `calc(${comment.x}% - 0px)`,
                top: `calc(${comment.y}% - 0px)`,
              }}
            >
              {comment.text}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Art;
