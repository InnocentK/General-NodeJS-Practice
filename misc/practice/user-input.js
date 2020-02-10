function prompt(question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    stdin.once('data', function (data) {
            callback(data.toString().trim());
        });
}

prompt('Whats your age? ', function (input) {
        console.log(input);
        process.exit();
    });
