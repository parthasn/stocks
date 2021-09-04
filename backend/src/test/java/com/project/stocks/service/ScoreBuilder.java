package com.project.stocks.service;


import com.project.stocks.dto.YearInfo;
import com.project.stocks.model.Score;

import java.util.List;

public class ScoreBuilder {

    private Score score = new Score();
    public ScoreBuilder withPE(double pe) {
        if(pe >= 1 && pe <=20)
            score.addValue(5);
        else if(pe >= 21 && pe <=40)
            score.addValue(4);
        else if(pe >= 41 && pe <=60)
            score.addValue(3);
        else if(pe >= 61 && pe <=80)
            score.addValue(2);
        else
            score.addValue(1);
        return this;
    }

    public Score build() {
        return score;
    }

    public ScoreBuilder withOPM(List<YearInfo> opmList) {
        int size = opmList.size();
        int count = 0;
        for(int i = size-2; i >= size-6; i--){
            int presentValue = convertStringToInteger(removePercentageSymbol(opmList.get(i).getValue()));
            int previousValue = convertStringToInteger(removePercentageSymbol(opmList.get(i+1).getValue()));
            if(presentValue < previousValue){
                count += 1;
            }
        }
        score.addValue(count);
        return this;
    }

    private int convertStringToInteger(String value) {
        return Integer.parseInt(value);
    }

    private String removePercentageSymbol(String value) {
        int length = value.length();
        if(value.indexOf("%") != -1){
            value = value.substring(0, length-1);
        }
        return value;
    }
}
