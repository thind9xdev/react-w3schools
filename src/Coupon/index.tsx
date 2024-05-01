import styled from "styled-components";
import { ImageLazy } from "image-lazy-component";

interface CouponProps {
  content: string;
  title: string;
  logo?: string;
  imgPromo: string;
  promoCode?: string;
  expires?: string;
}

const CouponContainer = styled.div`
  border: 5px dotted #bbb;
  width: 80%;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 600px;
`;

const CouponContent = styled.div`
  padding: 2px 16px;
  background-color: #f1f1f1;
`;

const PromoCode = styled.span`
  background: #ccc;
  padding: 3px;
`;

const Expire = styled.p`
  color: red;
`;

const Coupon = ({
  content,
  title,
  logo,
  imgPromo,
  expires,
  promoCode,
}: CouponProps) => {
  return (
    <CouponContainer className="coupon">
      <CouponContent className="coupon_container">
        <h3>{logo ? logo : `Company Logo`}</h3>
      </CouponContent>
      <ImageLazy imgUrl={imgPromo} alt="Avatar" style={{ width: "100%" }} />
      <CouponContent
        className="coupon_container"
        style={{ backgroundColor: "white" }}
      >
        <h2>
          <b>{title}</b>
        </h2>
        <p>{content}</p>
      </CouponContent>
      <CouponContent className="coupon_container">
        <p>
          Use Promo Code: <PromoCode className="promo">{promoCode}</PromoCode>
        </p>
        <Expire className="expire">Expires: {expires}</Expire>
      </CouponContent>
    </CouponContainer>
  );
};

export default Coupon;
