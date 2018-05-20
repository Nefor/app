class JobsPortal::Api::V1::PropositionsController < ApplicationController

  def index
    @propositions = Proposition.all
  end

end