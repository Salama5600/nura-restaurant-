import React, {useState} from 'react';
import {Utensils} from 'lucide-react';
import {useApp} from '../context/AppContext';
import {formatPrice} from '../data/restaurantData';
import {MenuItem} from '../types';

interface DishCardProps {
  dish: MenuItem;
  compact?: boolean;
}

export const DishCard: React.FC<DishCardProps> = ({dish, compact = false}) => {
  const {lang, currency, navigate, t} = useApp();
  const [imgError, setImgError] = useState(false);

  const metaLabels: string[] = [];
  if (dish.signature) metaLabels.push(t('menu.dietary.signature'));
  if (dish.vegetarian) metaLabels.push(t('menu.dietary.vegetarian'));
  if (dish.glutenFree) metaLabels.push(t('menu.dietary.glutenFree'));

  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-olive/8 shadow-[0_2px_12px_rgba(32,40,32,0.04)] transition-transform duration-200 hover:-translate-y-0.5">
      {dish.image && !imgError ? (
        <div className="aspect-[4/3] w-full overflow-hidden bg-sand">
          <img
            src={dish.image}
            alt={dish.name[lang]}
            width={960}
            height={717}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] w-full bg-gradient-to-br from-sand to-cream flex flex-col items-center justify-center gap-2 px-6 text-center border-b border-olive/8">
          <Utensils className="w-6 h-6 text-gold" aria-hidden="true" />
          <span className="font-serif text-xl font-semibold text-olive">
            {dish.name[lang]}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-5 gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl font-semibold text-olive leading-snug">
            {dish.name[lang]}
          </h3>
          <span className="text-base font-semibold text-olive tabular-nums whitespace-nowrap shrink-0">
            {formatPrice(dish.priceUsd, currency, lang)}
          </span>
        </div>

        {!compact && metaLabels.length > 0 && (
          <p className="text-xs text-gold font-medium">
            {metaLabels.join(' · ')}
          </p>
        )}

        {!compact && (
          <p className="text-sm text-muted leading-relaxed flex-1">
            {dish.description[lang]}
          </p>
        )}

        {!compact && (
          <div className="pt-3 mt-1 border-t border-olive/8 flex items-center justify-between">
            <span className="text-xs text-muted">
              {t(`menu.category.${dish.category}`)}
            </span>
            <button
              type="button"
              onClick={() => navigate('reservation', dish.name[lang])}
              className="text-xs font-semibold text-olive hover:text-gold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t('menu.dishReserve')}
            </button>
          </div>
        )}
      </div>
    </article>
  );
};
