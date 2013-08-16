class Competition < ActiveRecord::Base
  belongs_to :user
  has_many :tracks

  def latest_tracks
    tracks.all(:limit => 5, :order => "created_at DESC")
  end

  def top_tracks
    tracks.plusminus_tally(:limit => 5)
  end
end
