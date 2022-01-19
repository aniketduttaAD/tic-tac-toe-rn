import { useRef, useEffect } from "react";
import { Audio } from 'expo-av'
import * as Haptics from 'expo-haptics'

type SoundType = "click2" | "winner1" | "winner2" | "loss1" | "loss2";

export default function useSounds() { 
    const popSoundRef = useRef<Audio.Sound | null>(null)
    const pop2SoundRef = useRef<Audio.Sound | null>(null)
    const winSoundRef = useRef<Audio.Sound | null>(null)
    const lossSoundRef = useRef<Audio.Sound | null>(null)
    const drawSoundRef = useRef<Audio.Sound | null>(null)
     
    const playSound = (sound: SoundType): void => {   
        const soundsMap = {
            pop1: popSoundRef,
            pop2: pop2SoundRef,
            win: winSoundRef,
            loss: lossSoundRef,
            draw: drawSoundRef,
        }
        try {
            soundsMap[sound].current?.replayAsync();
        } catch (error) {
            console.log(error);
            
        }
    };
    
    useEffect(() => {
        //load sounds
        const popSoundObject = new Audio.Sound()
        const pop2SoundObject = new Audio.Sound()
        const winSoundObject = new Audio.Sound()
        const lossSoundObject = new Audio.Sound()
        const drawSoundObject = new Audio.Sound()

        const loadSounds = async () => {
            await popSoundObject.loadAsync(require('@assets/click2.wav'))
            popSoundRef.current = popSoundObject
            await pop2SoundObject.loadAsync(require('@assets/click2.wav'))
            pop2SoundRef.current = pop2SoundObject
            await winSoundObject.loadAsync(require('@assets/winner1.mp3'))
            winSoundRef.current = winSoundObject
            await lossSoundObject.loadAsync(require('@assets/loss2.mp3'))
            lossSoundRef.current = lossSoundObject
            await drawSoundObject.loadAsync(require('@assets/loss1.mp3'))
            drawSoundRef.current = drawSoundObject
        }
        loadSounds()
        return () => {
            //unload sounds
            popSoundObject && popSoundObject.unloadAsync()
            pop2SoundObject && pop2SoundObject.unloadAsync()
            winSoundObject && lossSoundObject.unloadAsync()
            lossSoundObject && lossSoundObject.unloadAsync()
            drawSoundObject && drawSoundObject.unloadAsync()
        };
    }, []);
    return playSound;
}
