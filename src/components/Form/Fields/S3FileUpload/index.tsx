import React from "react";
import { DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import SortableImage from "@/components/Form/Fields/S3FileUpload/SortableImage";
import Image from "./Image";
import { getUrl, remove, uploadData } from "aws-amplify/storage";

import styles from "./S3FileUpload.module.scss";

type ValueType = string | string[];

type Props = {
  filePath: string;
  contentType?: string;
  value: ValueType;
  onChange: (ValueType) => void;
  alt: string;
  multiple: boolean;
};

const S3FileUpload = ({
  filePath = "",
  contentType = "image/*",
  value = [],
  onChange = () => {},
  alt = "",
  multiple = false,
}: Props) => {
  const deleteItemHandler = (imageUrl) => {
    const imageKey = imageUrl.split("public/")[1];

    remove({ key: imageKey })
      .then(() => {
        if (multiple) {
          const filteredValues = value.filter(
            (imageSrc) => imageSrc !== imageUrl,
          );
          onChange([...filteredValues]);
        } else {
          onChange(null);
        }
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filesArray = Array.from(e.target.files);
    filesArray.forEach(async (file) => {
      const result = await uploadData({
        key: `${filePath}/${file.name}`,
        data: file,
        options: {
          contentType: file.type,
        },
      }).result;

      // Go and get the URL of the image we just uploaded
      const fileProperties = await getUrl({
        key: result.key,
      });

      const justUrl = fileProperties.url.href.split("?")[0];

      if (multiple) {
        onChange([...value, justUrl]);
      } else {
        onChange(justUrl);
      }
    });
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = value.indexOf(active.id);
      const newIndex = value.indexOf(over.id);
      const newValue = arrayMove(value, oldIndex, newIndex);
      onChange(newValue);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept={contentType}
        multiple={multiple}
        onChange={(e) => onInputChange(e)}
      />
      {value && (
        <div className={styles.images}>
          {multiple ? (
            <DndContext onDragEnd={handleDragEnd}>
              <SortableContext items={value}>
                {value.map((imageSrc) => {
                  return (
                    <SortableImage
                      key={imageSrc}
                      imageSrc={imageSrc}
                      onDeleteItem={deleteItemHandler}
                    />
                  );
                })}
              </SortableContext>
            </DndContext>
          ) : (
            <Image
              onDeleteItem={deleteItemHandler}
              imageSrc={value as string}
              alt={alt}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default S3FileUpload;
