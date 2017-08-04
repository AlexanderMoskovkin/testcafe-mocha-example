import { Selector } from 'testcafe';

fixture `TestCafe fixture`
    .page `http://example.com`;

test('TestCafe test', async t => {
    await t.wait(1000);
});