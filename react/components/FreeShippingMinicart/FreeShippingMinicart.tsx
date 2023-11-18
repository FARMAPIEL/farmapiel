// Import tslib to fix TS2354 error
import 'tslib';

import React, { Fragment, useMemo } from 'react';
import { useOrderForm } from 'vtex.order-manager/OrderForm';
import styles from './FreeShippingMinicart.css';

// Fix TS7026 error by declaring JSX.IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

interface FreeShippingMinicartI {
  priceFreeShipping: number;
  isShow: boolean;
  blockClass: string;
}

const FreeShippingMinicart = (props: FreeShippingMinicartI) => {
  const { priceFreeShipping, isShow, blockClass } = props;
  const {
    orderForm,
    orderForm: { value },
  } = useOrderForm();
  const totalPrice = value / 100;
  const porcentage = (totalPrice * 100) / priceFreeShipping;

  const statusFree = porcentage >= 100;
  const widthPercentage = statusFree ? '100%' : `${porcentage.toFixed(2)}%`;
  const statusClass = statusFree ? styles['ShippingMinicart-statusFree'] : '';

  return useMemo(() => {
    let htmlBlock1 = <Fragment />;
    let htmlBlock2 = (
      <p className={`${styles['ShippingMinicart-freeText']}`}>
        ¡Tenés envío gratis!
      </p>
    );

    if (isShow) {
      const formattedRemainingAmount = (
        priceFreeShipping - totalPrice
      ).toLocaleString('es-MX', { minimumFractionDigits: 0 });

      if (totalPrice < priceFreeShipping) {
        htmlBlock2 = (
          <p className={`${styles['ShippingMinicart-text']}`}>
            ¡Te faltan{' '}
            <span className={`${styles['ShippingMinicart-textPrice']}`}>
              ${formattedRemainingAmount}
            </span>{' '}
            para tener{' '}
            <span className={`${styles['ShippingMinicart-green']}`}>
              envío gratis!
            </span>
          </p>
        );
      }

      return (
        <div className={`${styles['ShippingMinicart-container']}`}>
          <div
            className={`${styles['ShippingMinicart-wrapper']} ${statusClass} ${styles['ShippingMinicart-wrapper']}--${blockClass}`}
          >
            {htmlBlock1}
            <div className={`${styles['ShippingMinicart-wrapperBar']}`}>
              <div className={`${styles['ShippingMinicart-containerBar']}`}>
                <div className={`${styles['ShippingMinicart-bar']}`} style={{ width: widthPercentage }}></div>
              </div>
            </div>
            {htmlBlock2}
          </div>
        </div>
      );
    }

    return <Fragment />;
  }, [props, totalPrice, orderForm]);
};

FreeShippingMinicart.getSchema = () => {
  return {
    title: 'FreeShippingMinicart',
    type: 'object',
    properties: {
      priceFreeShipping: {
        title: 'Price of Free Shipping',
        type: 'number',
        default: 39900, // Set a default value based on the actual configuration
      },
      isShow: {
        title: 'Show',
        type: 'boolean',
        default: true,
      },
      blockClass: {
        title: 'BlockClass (dev)',
        type: 'string',
        default: '',
      },
    },
  };
};

FreeShippingMinicart.defaultProps = {
  isShow: true,
  blockClass: '',
};

export default FreeShippingMinicart;
