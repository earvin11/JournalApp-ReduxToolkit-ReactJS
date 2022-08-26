import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JorunalPage = () => {

    return(
        <JournalLayout>

            {/* Nothing selected */}
            {/* <NothingSelectedView /> */}

            {/* Note view */}
            <NoteView />

        </JournalLayout>
    )
}