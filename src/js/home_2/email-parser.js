class EmailParser {
    constructor (email) {
        this.$email = email;
    }
    
    get email() { return this.$email; }

    get isCorrect() {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.$email);
    }

    get name() { return this.isCorrect ? this.$email.match(/(^.+)@/)[1] : null; }

    get domain() { return this.isCorrect ? this.$email.match(/@(.+)$/)[1] : null; }

}
    
export default EmailParser;


