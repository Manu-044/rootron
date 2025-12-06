// Sound Effects Manager using Web Audio API
class SoundEffectsManager {
    private audioContext: AudioContext | null = null;
    private isMuted: boolean = false;
    private masterVolume: number = 0.3;

    constructor() {
        if (typeof window !== 'undefined') {
            this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            this.loadMuteState();
        }
    }

    private loadMuteState() {
        const saved = localStorage.getItem('soundMuted');
        this.isMuted = saved === 'true';
    }

    public setMuted(muted: boolean) {
        this.isMuted = muted;
        localStorage.setItem('soundMuted', String(muted));
    }

    public isSoundMuted(): boolean {
        return this.isMuted;
    }

    public setVolume(volume: number) {
        this.masterVolume = Math.max(0, Math.min(1, volume));
    }

    private createOscillator(frequency: number, type: OscillatorType = 'sine'): OscillatorNode {
        if (!this.audioContext) throw new Error('AudioContext not initialized');
        const oscillator = this.audioContext.createOscillator();
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        return oscillator;
    }

    private createGain(initialValue: number = 1): GainNode {
        if (!this.audioContext) throw new Error('AudioContext not initialized');
        const gainNode = this.audioContext.createGain();
        gainNode.gain.value = initialValue * this.masterVolume;
        return gainNode;
    }

    // Click sound - short, crisp
    public playClick() {
        if (this.isMuted || !this.audioContext) return;

        const oscillator = this.createOscillator(800, 'sine');
        const gainNode = this.createGain(0.15);

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        const now = this.audioContext.currentTime;
        gainNode.gain.setValueAtTime(0.15 * this.masterVolume, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

        oscillator.start(now);
        oscillator.stop(now + 0.1);
    }

    // Hover sound - subtle, soft
    public playHover() {
        if (this.isMuted || !this.audioContext) return;

        const oscillator = this.createOscillator(600, 'sine');
        const gainNode = this.createGain(0.08);

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        const now = this.audioContext.currentTime;
        gainNode.gain.setValueAtTime(0.08 * this.masterVolume, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

        oscillator.start(now);
        oscillator.stop(now + 0.15);
    }

    // Modal open - rising swoosh
    public playModalOpen() {
        if (this.isMuted || !this.audioContext) return;

        const oscillator = this.createOscillator(200, 'sine');
        const gainNode = this.createGain(0.2);

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        const now = this.audioContext.currentTime;
        oscillator.frequency.setValueAtTime(200, now);
        oscillator.frequency.exponentialRampToValueAtTime(800, now + 0.3);
        gainNode.gain.setValueAtTime(0.2 * this.masterVolume, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

        oscillator.start(now);
        oscillator.stop(now + 0.3);
    }

    // Modal close - descending swoosh
    public playModalClose() {
        if (this.isMuted || !this.audioContext) return;

        const oscillator = this.createOscillator(800, 'sine');
        const gainNode = this.createGain(0.15);

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        const now = this.audioContext.currentTime;
        oscillator.frequency.setValueAtTime(800, now);
        oscillator.frequency.exponentialRampToValueAtTime(200, now + 0.25);
        gainNode.gain.setValueAtTime(0.15 * this.masterVolume, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

        oscillator.start(now);
        oscillator.stop(now + 0.25);
    }

    // Card click - medium pitch pop
    public playCardClick() {
        if (this.isMuted || !this.audioContext) return;

        const oscillator = this.createOscillator(1000, 'sine');
        const gainNode = this.createGain(0.18);

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        const now = this.audioContext.currentTime;
        gainNode.gain.setValueAtTime(0.18 * this.masterVolume, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

        oscillator.start(now);
        oscillator.stop(now + 0.12);
    }

    // Page transition - smooth whoosh
    public playPageTransition() {
        if (this.isMuted || !this.audioContext) return;

        const oscillator = this.createOscillator(300, 'sine');
        const gainNode = this.createGain(0.12);

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        const now = this.audioContext.currentTime;
        oscillator.frequency.setValueAtTime(300, now);
        oscillator.frequency.exponentialRampToValueAtTime(600, now + 0.2);
        gainNode.gain.setValueAtTime(0.12 * this.masterVolume, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

        oscillator.start(now);
        oscillator.stop(now + 0.2);
    }

    // Success sound - pleasant chime
    public playSuccess() {
        if (this.isMuted || !this.audioContext) return;

        const oscillator1 = this.createOscillator(523.25, 'sine'); // C5
        const oscillator2 = this.createOscillator(659.25, 'sine'); // E5
        const gainNode = this.createGain(0.15);

        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        const now = this.audioContext.currentTime;
        gainNode.gain.setValueAtTime(0.15 * this.masterVolume, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

        oscillator1.start(now);
        oscillator2.start(now + 0.05);
        oscillator1.stop(now + 0.4);
        oscillator2.stop(now + 0.45);
    }

    // Button click - crisp click
    public playButtonClick() {
        if (this.isMuted || !this.audioContext) return;

        const oscillator = this.createOscillator(900, 'square');
        const gainNode = this.createGain(0.1);

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        const now = this.audioContext.currentTime;
        gainNode.gain.setValueAtTime(0.1 * this.masterVolume, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

        oscillator.start(now);
        oscillator.stop(now + 0.08);
    }

    // Carousel transition - soft slide
    public playCarouselSlide() {
        if (this.isMuted || !this.audioContext) return;

        const oscillator = this.createOscillator(400, 'sine');
        const gainNode = this.createGain(0.1);

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        const now = this.audioContext.currentTime;
        oscillator.frequency.setValueAtTime(400, now);
        oscillator.frequency.linearRampToValueAtTime(500, now + 0.15);
        gainNode.gain.setValueAtTime(0.1 * this.masterVolume, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

        oscillator.start(now);
        oscillator.stop(now + 0.15);
    }

    // Member card hover - smooth, subtle rise (matches scale animation)
    public playMemberCardHover() {
        if (this.isMuted || !this.audioContext) return;

        const oscillator = this.createOscillator(350, 'sine');
        const gainNode = this.createGain(0.06);

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        const now = this.audioContext.currentTime;
        oscillator.frequency.setValueAtTime(350, now);
        oscillator.frequency.exponentialRampToValueAtTime(550, now + 0.2);
        gainNode.gain.setValueAtTime(0.06 * this.masterVolume, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

        oscillator.start(now);
        oscillator.stop(now + 0.2);
    }

    // Member card click - satisfying pop with harmonics
    public playMemberCardClick() {
        if (this.isMuted || !this.audioContext) return;

        const oscillator1 = this.createOscillator(800, 'sine');
        const oscillator2 = this.createOscillator(1200, 'sine');
        const gainNode = this.createGain(0.2);

        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        const now = this.audioContext.currentTime;

        // Quick attack, smooth decay
        gainNode.gain.setValueAtTime(0.2 * this.masterVolume, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

        // Slight frequency bend for character
        oscillator1.frequency.setValueAtTime(800, now);
        oscillator1.frequency.exponentialRampToValueAtTime(700, now + 0.1);
        oscillator2.frequency.setValueAtTime(1200, now);
        oscillator2.frequency.exponentialRampToValueAtTime(1000, now + 0.1);

        oscillator1.start(now);
        oscillator2.start(now + 0.01);
        oscillator1.stop(now + 0.25);
        oscillator2.stop(now + 0.25);
    }
}

// Singleton instance
let soundManager: SoundEffectsManager | null = null;

export const getSoundManager = (): SoundEffectsManager => {
    if (!soundManager) {
        soundManager = new SoundEffectsManager();
    }
    return soundManager;
};

export default getSoundManager;
