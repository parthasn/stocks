package com.project.stocks.service;

import com.project.stocks.dto.Stock;
import com.project.stocks.model.Score;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ScoreBuilderTest {

    @Test
    void givenPERatio39ScoreShouldBe4() {
        Score score = new ScoreBuilder().withPE(39.0).build();

        assertEquals(4, score.getValue());
    }

    @Test
    void givenPERatio1ScoreShouldBe5() {
        Score score = new ScoreBuilder().withPE(1.0).build();

        assertEquals(5, score.getValue());
    }

    @Test
    void givenPERatio41ScoreShouldBe3() {
        Score score = new ScoreBuilder().withPE(41.0).build();

        assertEquals(3, score.getValue());
    }

    @Test
    void givenPERatio61ScoreShouldBe2() {
        Score score = new ScoreBuilder().withPE(61.0).build();

        assertEquals(2, score.getValue());
    }

    @Test
    void givenPERatio81ScoreShouldBe1() {
        Score score = new ScoreBuilder().withPE(81.0).build();

        assertEquals(1, score.getValue());
    }


}