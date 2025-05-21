import {create} from "zustand"
import { LANGUAGE_CONFIG } from './../app/(root)/_constants/index';
import { Monaco } from "@monaco-editor/react";
import { CodeEditorState } from "@/types";


const getInitialState = () => {
    if(typeof window ==="undefined"){
        
    }
}


export const useCodeEditorStore = create<CodeEditorState>((set,get) => {
    const initialState = getInitialState();
    return {

    }
})