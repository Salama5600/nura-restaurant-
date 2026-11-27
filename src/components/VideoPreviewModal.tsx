import React, {useEffect} from 'react';
import {Calendar, Clock, X} from 'lucide-react';
import {useApp} from '../context/AppContext';
import {IMAGES} from '../data/restaurantData';

interface VideoPreviewModalProps {
  open: boolean;
  onClose: () => void;
}

export const VideoPreviewModal: React.FC<VideoPreviewModalProps> = ({
  open,
  onClose,
}) => {
  const {t, navigate} = useApp();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-olive text-cream rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 id="video-modal-title" className="font-serif text-2xl font-semibold">
            {t('video.title')}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('actions.close')}
            className="w-9 h-9 rounded-full flex items-center justify-center text-cream/80 hover:bg-white/10 hover:text-cream transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative aspect-video bg-olive-deep overflow-hidden">
          <img
            src={IMAGES.aboutInterior}
            alt={t('video.title')}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-olive-deep via-olive-deep/30 to-transparent" />
          <div className="absolute bottom-5 inset-x-6 space-y-2">
            <p className="text-sm text-cream/90 max-w-xl leading-relaxed">
              {t('video.subtitle')}
            </p>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 bg-olive-deep/50">
          {[t('video.chapter1'), t('video.chapter2'), t('video.chapter3')].map(
            (chapter) => (
              <div
                key={chapter}
                className="flex items-start gap-2.5 text-xs text-cream/80"
              >
                <Clock
                  className="w-4 h-4 text-gold-bright shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{chapter}</span>
              </div>
            ),
          )}
        </div>

        <div className="px-6 py-4 bg-olive flex items-center justify-end gap-3 border-t border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full text-sm text-cream/80 hover:text-cream transition-colors cursor-pointer"
          >
            {t('actions.close')}
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              navigate('reservation');
            }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-bright hover:bg-gold text-olive-deep text-sm font-semibold transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4" aria-hidden="true" />
            <span>{t('actions.reserve')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
