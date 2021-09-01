package com.project.stocks.model;

public class Score {

    private int score = 0;
    public int getValue() {
        return score;
    }

    public void addValue(int value) {
        this.score += value;
    }
}
