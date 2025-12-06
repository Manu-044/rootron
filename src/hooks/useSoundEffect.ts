"use client";

import { useEffect, useState } from 'react';
import { getSoundManager } from '@/lib/soundEffects';

export type SoundType =
    | 'click'
    | 'hover'
    | 'modalOpen'
    | 'modalClose'
    | 'cardClick'
    | 'pageTransition'
    | 'success'
    | 'buttonClick'
    | 'carouselSlide'
    | 'memberCardHover'
    | 'memberCardClick';

export function useSoundEffect() {
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const soundManager = getSoundManager();
        setIsMuted(soundManager.isSoundMuted());
    }, []);

    const playSound = (soundType: SoundType) => {
        const soundManager = getSoundManager();

        switch (soundType) {
            case 'click':
                soundManager.playClick();
                break;
            case 'hover':
                soundManager.playHover();
                break;
            case 'modalOpen':
                soundManager.playModalOpen();
                break;
            case 'modalClose':
                soundManager.playModalClose();
                break;
            case 'cardClick':
                soundManager.playCardClick();
                break;
            case 'pageTransition':
                soundManager.playPageTransition();
                break;
            case 'success':
                soundManager.playSuccess();
                break;
            case 'buttonClick':
                soundManager.playButtonClick();
                break;
            case 'carouselSlide':
                soundManager.playCarouselSlide();
                break;
            case 'memberCardHover':
                soundManager.playMemberCardHover();
                break;
            case 'memberCardClick':
                soundManager.playMemberCardClick();
                break;
        }
    };

    const toggleMute = () => {
        const soundManager = getSoundManager();
        const newMutedState = !soundManager.isSoundMuted();
        soundManager.setMuted(newMutedState);
        setIsMuted(newMutedState);
    };

    const setVolume = (volume: number) => {
        const soundManager = getSoundManager();
        soundManager.setVolume(volume);
    };

    return {
        playSound,
        isMuted,
        toggleMute,
        setVolume,
    };
}
