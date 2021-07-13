import * as React from 'react';
import Smartlook from 'smartlook-react-native-wrapper';

type Action = { type: 'startRecording' } | { type: 'stopRecording' } | { type: string };
type Dispatch = (action: Action) => void;
type State = { isRecording: boolean };
type RecordingProviderProps = { children: React.ReactNode };

const RecordingStateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

function RecordingReducer(_state: State, action: Action) {
	switch (action.type) {
		case 'startRecording': {
			Smartlook.startRecording();
			return { isRecording: true };
		}
		case 'stopRecording': {
			Smartlook.stopRecording();
			return { isRecording: false };
		}
		default: {
			throw new Error(`Unhandled action type: ${action!.type}`);
		}
	}
}

function RecordingProvider({ children }: RecordingProviderProps) {
	const [state, dispatch] = React.useReducer(RecordingReducer, { isRecording: false });

	const value = { state, dispatch };
	return <RecordingStateContext.Provider value={value}>{children}</RecordingStateContext.Provider>;
}

function useRecordingContext() {
	const context = React.useContext(RecordingStateContext);
	if (context === undefined) {
		throw new Error('useRecording must be used within a RecordingProvider');
	}
	return context;
}

export { RecordingProvider, useRecordingContext };
