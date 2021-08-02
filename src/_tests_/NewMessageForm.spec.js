import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewMessageForm from '../components/NewMessageForm';

describe('<NewMessageForm />', () => {
    let getByTestId;

    describe('clicking the send button', () => {
        let sendHandler;
        beforeEach(async () => {
            sendHandler = jest.fn().mockName('sendHandler');
            ({ getByTestId } = render(<NewMessageForm onSend={sendHandler}/>));

            await userEvent.type(
                getByTestId('messageText'), 'Test message'
            );
            userEvent.click(getByTestId('sendButton'));
        });

        it('clears the text field', () => {
            expect(getByTestId('messageText').value).toEqual('');
        });

        it('calls the sendHandler', () => {
            expect(sendHandler).toHaveBeenCalledWith('Test message')
        })
    });
});