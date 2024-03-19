export interface AiDataState {
  data: AiData | null;
  loading: boolean;
  error: string | null;
}

export interface AiData {
  insight_summary: {
    total_queries: number;
    successful_queries: number;
    failed_queries: number;
    average_response_time: number;
  };
  category_distribution: {
    [category: string]: number;
  };
  response_times: {
    day_wise: {
      date: string;
      average_time: number;
    }[];
    week_wise: {
      week: string;
      average_time: number;
    }[];
  };
  user_satisfaction: {
    ratings: {
      rating: number;
      count: number;
    }[];
  };
  usage_statistics: {
    by_platform: {
      [platform: string]: number;
    };
    by_country: {
      [country: string]: number;
    };
  };
}