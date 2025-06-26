interface DashboardLayoutPropsTypes {
    children: React.ReactNode;
}

interface FormData {
    age: string;
    gender: string;
    smokingStatus: string;
    riskRegion: string;
    region: string;
    diabetesHistory: string;
    diabetesAge?: string;
    healthProfile: {
        sbp: HealthParameter;
        totalCholesterol: HealthParameter;
        hdlCholesterol: HealthParameter;
        hba1c?: HealthParameter;
        serumCreatinine?: HealthParameter;
    };
}

interface HealthParameter {
  inputType: "manual" | "proxy" | "";
  manualValue?: string;
  proxyAnswers?: Record<string, any>;
  completed: boolean;
}

interface AnalysisRecord {
  slug: string
  date: string
  model_used: string
  risk_percentage: number
  input: {
    has_diabetes: boolean
    age_at_diabetes_diagnosis?: number
    smoking_status: string
    sbp_input_type: string
    sbp_proxy_answers?: Record<string, any>
    sbp_value?: number
    tchol_input_type: string
    tchol_proxy_answers?: Record<string, any>
    tchol_value?: number
    hdl_input_type: string
    hdl_proxy_answers?: Record<string, any>
    hdl_value?: number
  }
  generated_value: {
    age: number
    sex_label: "male" | "female"
    is_smoker: boolean
    has_diabetes: boolean
    sbp: number
    tchol: number
    hdl: number
    hba1c?: number
    scr?: number
  }
  result_details: {
    riskSummary: {
      riskPercentage: number
      riskCategory: {
        code: string
        title: string
      }
      executiveSummary: string
    }
    primaryContributors: {
      title: string
      severity: "HIGH" | "MEDIUM" | "LOW"
      description: string
    }[]
    contextualRiskExplanation: string
    positiveFactors: string[]
    actionPlan: {
      medicalConsultation: {
        recommendationLevel: {
          code: string
          title: string
          description: string
        }
        suggestedTests: {
          title: string
          description: string
        }[]
      }
      priorityLifestyleActions: {
        rank: number
        title: string
        description: string
        target: string
        estimatedImpact: string
      }[]
      impactSimulation: {
        message: string
        riskAfterChange: number
      }
    }
    personalizedEducation: {
      keyHealthMetrics: {
        title: string
        yourValue: string
        idealRange: string
        code: "GOOD" | "FAIR" | "POOR"
        description: string
      }[]
      mythVsFact: {
        myth: string
        fact: string
      }[]
    }
    closingStatement: {
      motivationalMessage: string
      firstStepAction: string
      localContextTip: string
    }
  }
}

interface DashboardData {
  summary: {
    total_assessments: number
    last_assessment_date_human: string
    latest_status: {
      category_code: string
      category_title: string
      description: string
    }
    health_trend: {
      direction: "improving" | "worsening" | "stable"
      change_value: number
      text: string
    }
  }
  graph_data_30_days: {
    labels: Record<string, string> // key: index, value: date string
    values: Record<string, number> // key: index, value: risk %
  }
  latest_assessment_details: {
    riskSummary: {
      riskPercentage: number
      riskCategory: { code: string; title: string }
      executiveSummary: string
    }
    primaryContributors: { title: string; severity: string; description: string }[]
    contextualRiskExplanation: string
    positiveFactors: string[]
  }
}



// AI CHAT
// History
interface ChatHistoryItem {
  slug: string
  title: string
  last_message_snippet: string
  last_updated_human: string
}

// Reply Components
type ReplyComponent =
  | { type: "header" | "paragraph" | "quote"; content: string }
  | { type: "list"; items: string[] }

// Message
interface ChatMessage {
  id: number
  role: "user" | "model"
  content: string | { reply_components: ReplyComponent[] }
  sent_at: string
}

// Conversation Detail
interface ChatConversationDetail {
  slug: string
  title: string
  messages: ChatMessage[]
}


