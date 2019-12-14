import React              from 'react';
import { ICurrencyProps } from './types';
import { Grid, Popup }    from 'semantic-ui-react';

const Currency: React.FC<ICurrencyProps> =
  ({
     cur,
     rate,
     title,
     sum,
     isFavourite,
     setFav
   }) => {
    const value = Number((sum * rate).toFixed(2));
    const formatted = new Intl.NumberFormat('de-DE').format(value);
    return (
      <Grid.Column computer='4'>
        <Popup content={title} trigger={

          <div
            className={`currency ${isFavourite && 'currency-fav'}`}
            onClick={() => setFav(cur)}>
            <div className='currency__caption'>{cur}</div>
            <div className='currency__value'>
              {formatted}
            </div>
          </div>

        }/>
      </Grid.Column>
    );
  };

export { Currency };
