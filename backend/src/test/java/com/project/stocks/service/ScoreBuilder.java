package com.project.stocks.service;


import com.project.stocks.dto.YearInfo;
import com.project.stocks.model.Score;

import java.time.Year;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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
        List<YearInfo> last6YearsOPMList = opmList.stream()
                .sorted((a,b) -> b.getYear()-a.getYear())
                .limit(6)
                .collect(Collectors.toList());
        for(int i = 1; i < last6YearsOPMList.size(); i++){
            int presentYear = last6YearsOPMList.get(i-1).getValue();
            int previousYear = last6YearsOPMList.get(i).getValue();
            if(presentYear > previousYear)
                score.addValue(1);
        }
        return this;
    }
}
