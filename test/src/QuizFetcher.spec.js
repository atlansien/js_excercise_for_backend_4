const QuizFetcher = require("../../src/QuizFetcher");
const assert = require("power-assert");

describe("QuizFetcherのクラス", () => {
  describe("Fetchメソッドの挙動確認", () => {
    it("fetchメソッドというクラスメソッドを持つ", () => {
      assert.equal(typeof QuizFetcher.fetch, "function");
    });
    it("【async/await版】fetchメソッドの戻り値の型チェック", async () => {
      const data = await QuizFetcher.fetch();

      assert.equal(data.hasOwnProperty("results"), true);
      assert.equal(Array.isArray(data.results), true);
      assert.equal(data.results.length === 10, true);

      data.results.forEach(result => {
        assert.equal(typeof result.category, "string");
        assert.equal(typeof result.type, "string");
        assert.equal(typeof result.difficulty, "string");
        assert.equal(typeof result.question, "string");
        assert.equal(typeof result.correct_answer, "string");

        // incorrect_answersの判別
        assert.equal(Array.isArray(result.incorrect_answers), true);
        assert.equal(result.incorrect_answers.length === 3, true);
        result.incorrect_answers.forEach(answer => {
          assert.equal(typeof answer, "string");
        });
      });
    });
    it("【Promise版】fetchメソッドの戻り値の型チェック", () => {
      return QuizFetcher.fetch().then(data => {
        assert.equal(data.hasOwnProperty("results"), true);
        assert.equal(Array.isArray(data.results), true);
        assert.equal(data.results.length === 10, true);

        data.results.forEach(result => {
          assert.equal(typeof result.category, "string");
          assert.equal(typeof result.type, "string");
          assert.equal(typeof result.difficulty, "string");
          assert.equal(typeof result.question, "string");
          assert.equal(typeof result.correct_answer, "string");

          // incorrect_answersの判別
          assert.equal(Array.isArray(result.incorrect_answers), true);
          assert.equal(result.incorrect_answers.length === 3, true);
          result.incorrect_answers.forEach(answer => {
            assert.equal(typeof answer, "string");
          });
        });
      });
    });
    it("【コールバック(done)版】fetchメソッドの戻り値の型チェック", done => {
      QuizFetcher.fetch().then(data => {
        assert.equal(data.hasOwnProperty("results"), true);
        assert.equal(Array.isArray(data.results), true);
        assert.equal(data.results.length === 10, true);

        data.results.forEach(result => {
          assert.equal(typeof result.category, "string");
          assert.equal(typeof result.type, "string");
          assert.equal(typeof result.difficulty, "string");
          assert.equal(typeof result.question, "string");
          assert.equal(typeof result.correct_answer, "string");

          // incorrect_answersの判別
          assert.equal(Array.isArray(result.incorrect_answers), true);
          assert.equal(result.incorrect_answers.length === 3, true);
          result.incorrect_answers.forEach(answer => {
            assert.equal(typeof answer, "string");
          });
        });
        done();
      });
    });
  });
});
