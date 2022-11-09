const alreadyExists = (tag, label) => `A ${tag} with that ${label} already exists`;

const doesNotExist = (tag) => `That ${tag} does not exist.`

export default class Messages {
    generic = {
        TOO_SHORT: 'This field is too short',
        TOO_LONG: 'This field is too long',
        REQUIRED: 'This field is required',
        INVALID_PHONE_NUMBER: 'Please provide a valid Kenyan phone number.',
        ALPHANUMERIC: 'This field must be an alphanumeric string',
        GENERIC_ERROR: 'An error occurred. Please try again later.',
        GENERIC_INPUT_ERROR: 'Please fix the errors and try again.',
        NOT_IMPLEMENTED: "This feature has not been implemented."
    };

    passwords = {
        COMMON_PASSWORD: 'That password is too easy to guess. Try something stronger.',
        TOO_SHORT: 'Your password should be at least 8 characters long',
        INCORRECT_PASSWORD: 'Invalid username/email or password. Please try again.',
        TOO_LONG: 'Your password should not be longer than 256 characters',
        NO_DIGITS: 'Your password should have at least one number.',
        LOWERCASE_CHARS: 'Your password should have at least one lowercase character.',
        UPPERCASE_CHARS: 'Your password should have at least one uppercase character.',
        SYMBOLS: 'Your password should have at least one symbol.',
    };
    http = {
        BAD_REQUEST: 'Bad Request',
        INTERNAL_ERROR: 'An internal error occurred - our engineers have already been notified.',
        NOT_FOUND: "Sorry. We couldn't find what you're looking for.",
        UNAUTHORIZED: "You're not authorized to do that.",
    };
}