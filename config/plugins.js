module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: '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',
      },
      settings: {
        defaultFrom: 'thecoffeestudied@gmail.com',
        defaultReplyTo: 'thecoffeestudied@gmail.com',
        testAddress: '01217560023minh@gmail.com',
      },
    },
    // ...
  });