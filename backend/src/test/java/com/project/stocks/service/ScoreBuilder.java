package com.project.stocks.service;


import com.project.stocks.model.Score;

public class ScoreBuilder {

    private Score score = new Score();
    public ScoreBuilder withPE(double pe) {
        if(pe >= 1 && pe <=20)
            score.addValue(5);
        else if(pe >= 21 && pe <=40)
            score.addValue(4);
        else
            score.addValue(3);
        return this;
    }

    public Score build() {
        return score;
    }
}
