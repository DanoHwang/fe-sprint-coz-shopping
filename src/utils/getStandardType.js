import { itemCardTypes } from "../constants/itemCardTypes";

const { product, category, exhibition, brand } = itemCardTypes;

export const getStandardType = (data) => {
  const result = {
    type: '',
    title: '',
    subTitle: '',
    image: '',
    price: '',
    discount: 0,
    follower: 0
  };

  switch (data.type) {
  case product:
    result.title = data.title;
    result.image = data.image_url;
    result.price = `${data.price.toLocaleString('ko-KR')}원`;
    result.discount = `${data.discountPercentage}%`;
    break;

  case category:
    result.title = `# ${data.title}`;
    result.image = data.image_url;
    break;

  case exhibition:
    result.title = data.title;
    result.subTitle = data.sub_title;
    result.image = data.image_url;
    break;

  case brand:
    result.title = data.brand_name;
    result.image = data.brand_image_url;
    result.follower = data.follower.toLocaleString('ko-KR');
    break;

  default:
    return null;
  }

  return result;
};
