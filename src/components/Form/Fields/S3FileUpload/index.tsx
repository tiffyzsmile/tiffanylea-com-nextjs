import React, { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import SortableImage from "@/components/Form/Fields/S3FileUpload/SortableImage";
import Image from "./Image";
import { remove, uploadData, getProperties, getUrl } from "aws-amplify/storage";

import styles from "./S3FileUpload.module.scss";

type ValueType = string | string[];

type Props = {
  fieldId?: string;
  filePath: string;
  contentType?: string;
  value: ValueType;
  onChange: (ValueType) => void;
  alt: string;
  multiple: boolean;
};

const S3FileUpload = ({
  fieldId = "images",
  filePath = "",
  contentType = "image/*",
  value = [],
  onChange = () => {},
  alt = "",
  multiple = false,
}: Props) => {
  const [images, setImages] = useState<string[]>([]);
  const [image, setImage] = useState<string | null>(null);
  const deleteItemHandler = (imageUrl) => {
    const imageKey = imageUrl.split("public/")[1];

    remove({ key: imageKey })
      .then(() => {
        if (multiple) {
          const filteredValues = images.filter((imageSrc) => {
            return imageSrc !== imageUrl;
          });
          onChange([...filteredValues]);
        } else {
          onChange(null);
        }
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };

  useEffect(() => {
    if (multiple) {
      setImages([...value] || []);
    } else {
      setImage(value as string);
    }
  }, []);

  useEffect(() => {
    // anytime images changes we need to call on change handler to update form values
    if (multiple) {
      onChange(images);
    } else {
      // we only have 1 image
      onChange(image);
    }
  }, [images, image]);

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
        setImages((images) => {
          return [...images, justUrl];
        });
        // onChange(images);
      } else {
        // we only have 1 image

        setImage(justUrl);
      }

      // Storage.get(itemKey)
      //   .then((itemUrl) => {
      //     const justUrl = itemUrl.split("?")[0];
      //     if (multiple) {
      //       values.push(justUrl);
      //       // If we have all the uploaded images
      //       if (filesArray.length === values.length) {
      //         onChange([...value, ...values]);
      //       }
      //     } else {
      //       // we only have 1 image
      //       onChange(justUrl);
      //     }
      //   })
      // .catch((err) => console.error("put image error", err));
    });
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setImages((images) => {
        const oldIndex = images.indexOf(active.id);
        const newIndex = images.indexOf(over.id);
        return arrayMove(images, oldIndex, newIndex);
      });
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
              <SortableContext items={images}>
                {images.map((imageSrc) => {
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
            />
          )}
        </div>
      )}
    </div>
  );
};

export default S3FileUpload;
