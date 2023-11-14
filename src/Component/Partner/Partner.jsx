import { partner } from '../data';
import './Partner.scss';

const Partner = () => {
  return (
    <section>
      <div className="partner_title">
        <h2>TrustedBy</h2>
        <p>More than 15000+ brand trust an homelum</p>
      </div>
      <div className="partner_image">
        {partner.map((part, index) => {
          return <img key={index} src={part} alt="" />;
        })}
      </div>
    </section>
  );
};

export default Partner;
