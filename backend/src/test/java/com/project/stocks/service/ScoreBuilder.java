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
        List<YearInfo> last6YearsOPMList = getLast6YearsRecordInDescendingOrder(opmList);
        for(int i = 1; i < last6YearsOPMList.size(); i++){
            int presentYear = last6YearsOPMList.get(i-1).getValue();
            int previousYear = last6YearsOPMList.get(i).getValue();
            if(presentYear > previousYear)
                score.addValue(1);
        }
        return this;
    }

    public ScoreBuilder withNPM(List<YearInfo> npmList) {
        List<YearInfo> last6YearsNPMList = getLast6YearsRecordInDescendingOrder(npmList);
        for(int i = 1; i < last6YearsNPMList.size(); i++){
            int presentYear = last6YearsNPMList.get(i-1).getValue();
            int previousYear = last6YearsNPMList.get(i).getValue();
            if(presentYear > previousYear)
                score.addValue(1);
        }
        return this;
    }

    public ScoreBuilder withRevenue(List<YearInfo> revenueDetails) {
        List<YearInfo> last6YearsRevenueList = getLast6YearsRecordInDescendingOrder(revenueDetails);
        for(int i = 1; i < last6YearsRevenueList.size(); i++){
            int presentYear = last6YearsRevenueList.get(i-1).getValue();
            int previousYear = last6YearsRevenueList.get(i).getValue();
            if(presentYear > previousYear)
                score.addValue(1);
        }
        return this;
    }

    public ScoreBuilder withBorrowings(List<YearInfo> borrowingsDetails) {
        List<YearInfo> last6YearsBorrowingList = getLast6YearsRecordInDescendingOrder(borrowingsDetails);
        for(int i = 1; i < last6YearsBorrowingList.size(); i++){
            int presentYear = last6YearsBorrowingList.get(i-1).getValue();
            int previousYear = last6YearsBorrowingList.get(i).getValue();
            if(presentYear < previousYear)
                score.addValue(1);
        }
        return this;
    }

    public ScoreBuilder withOtherLiabilities(List<YearInfo> otherLiabilitiesDetails) {
        List<YearInfo> last6YearsOtherLiabilityList = getLast6YearsRecordInDescendingOrder(otherLiabilitiesDetails);
        for(int i = 1; i < last6YearsOtherLiabilityList.size(); i++){
            int presentYear = last6YearsOtherLiabilityList.get(i-1).getValue();
            int previousYear = last6YearsOtherLiabilityList.get(i).getValue();
            if(presentYear < previousYear)
                score.addValue(1);
        }
        return this;
    }

    private List<YearInfo> getLast6YearsRecordInDescendingOrder(List<YearInfo> inputList){
        List<YearInfo> last6Years = inputList.stream()
                .sorted((a,b) -> b.getYear()-a.getYear())
                .limit(6)
                .collect(Collectors.toList());
        return last6Years;
    }
}
